import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';

interface Copy {
  title: string;
  subtitle: string;
  company: string;
  adminName: string;
  adminEmail: string;
  phone: string;
  phoneOptional: string;
  vehicles: string;
  submit: string;
  loading: string;
  successTitle: string;
  successBody: string;
  successCta: string;
  error409: string;
  error429: string;
  errorGeneric: string;
  validationCompany: string;
  validationName: string;
  validationEmail: string;
  privacyBefore: string;
  privacyLink: string;
  privacyAfter: string;
}

interface Props {
  apiUrl: string;
  appUrl: string;
  privacyHref: string;
  initialVehicles?: number;
  copy: Copy;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function SignupForm({
  apiUrl,
  appUrl,
  privacyHref,
  initialVehicles = 5,
  copy,
}: Props) {
  const [companyName, setCompanyName] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [hpField, setHpField] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get('vehicles');
    if (!raw) return;
    const n = Number(raw);
    if (Number.isFinite(n) && n >= 1) setVehicles(Math.min(1000, Math.floor(n)));
  }, []);

  const endpoint = useMemo(
    () => `${apiUrl.replace(/\/$/, '')}/api/auth/public-signup`,
    [apiUrl],
  );

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (companyName.trim().length < 2) next.company = copy.validationCompany;
    if (adminName.trim().length < 2) next.name = copy.validationName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(adminEmail.trim())) {
      next.email = copy.validationEmail;
    }
    setFieldErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!validate()) return;

    setStatus('loading');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company_name: companyName.trim(),
          admin_name: adminName.trim(),
          admin_email: adminEmail.trim(),
          phone: phone.trim() || undefined,
          estimated_vehicles: vehicles,
          hp_field: '',
        }),
      });

      if (res.status === 201) {
        setStatus('success');
        return;
      }
      if (res.status === 409) {
        setError(copy.error409);
        setStatus('error');
        return;
      }
      if (res.status === 429) {
        setError(copy.error429);
        setStatus('error');
        return;
      }

      let detail = copy.errorGeneric;
      try {
        const data = (await res.json()) as { message?: string; error?: string };
        if (data.message || data.error) {
          detail = data.message || data.error || detail;
        }
      } catch {
        /* keep generic */
      }
      setError(detail);
      setStatus('error');
    } catch {
      setError(copy.errorGeneric);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="glass mx-auto max-w-lg rounded-3xl p-8 text-center">
        <h2 className="font-display text-2xl font-bold">{copy.successTitle}</h2>
        <p className="mt-3 text-slate-muted">{copy.successBody}</p>
        <a href={appUrl} className="btn-primary mt-6 inline-flex">
          {copy.successCta}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass mx-auto max-w-lg rounded-3xl p-6 sm:p-8"
      noValidate
    >
      <h1 className="font-display text-2xl font-bold sm:text-3xl">{copy.title}</h1>
      <p className="mt-2 text-sm text-slate-muted">{copy.subtitle}</p>

      {/* Honeypot — visually hidden, always submit empty */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="hp_field">Website</label>
        <input
          id="hp_field"
          name="hp_field"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={hpField}
          onChange={(e) => setHpField(e.target.value)}
        />
      </div>

      <div className="mt-6 space-y-4">
        <Field
          label={copy.company}
          error={fieldErrors.company}
          id="company_name"
        >
          <input
            id="company_name"
            className="field-input"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            autoComplete="organization"
            required
            minLength={2}
          />
        </Field>

        <Field label={copy.adminName} error={fieldErrors.name} id="admin_name">
          <input
            id="admin_name"
            className="field-input"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            autoComplete="name"
            required
            minLength={2}
          />
        </Field>

        <Field label={copy.adminEmail} error={fieldErrors.email} id="admin_email">
          <input
            id="admin_email"
            type="email"
            className="field-input"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </Field>

        <Field
          label={`${copy.phone} (${copy.phoneOptional})`}
          id="phone"
        >
          <input
            id="phone"
            type="tel"
            className="field-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </Field>

        <Field label={copy.vehicles} id="estimated_vehicles">
          <input
            id="estimated_vehicles"
            type="number"
            min={1}
            max={1000}
            className="field-input"
            value={vehicles}
            onChange={(e) => setVehicles(Number(e.target.value) || 1)}
          />
        </Field>
      </div>

      {error && (
        <p className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-200" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="btn-primary mt-6 w-full"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? copy.loading : copy.submit}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-slate-muted">
        {copy.privacyBefore}
        <a href={privacyHref} className="text-accent-soft underline-offset-2 hover:underline">
          {copy.privacyLink}
        </a>
        {copy.privacyAfter}
      </p>

      <style>{`
        .field-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          padding: 0.75rem 0.9rem;
          color: #f8fafc;
          outline: none;
        }
        .field-input:focus {
          border-color: rgba(255,87,34,0.5);
          box-shadow: 0 0 0 3px rgba(255,87,34,0.15);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-offwhite">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-300">{error}</p>}
    </div>
  );
}
