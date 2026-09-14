import { useState, type FormEvent } from 'react';
import { localizePath } from '../../lib/env';

interface Copy {
  title: string;
  body: string;
  name: string;
  email: string;
  company: string;
  vehicles: string;
  message: string;
  submit: string;
  orEmail: string;
  trialCta: string;
  trialLink: string;
  mailtoSubject: string;
  todoBackend: string;
}

interface Props {
  locale: string;
  copy: Copy;
}

/**
 * v1: opens a pre-filled mailto draft (no backend endpoint yet).
 * TODO: Replace mailto draft submit with POST endpoint when early-access API is ready.
 */
export default function EarlyAccessForm({ locale, copy }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [vehicles, setVehicles] = useState('5');
  const [message, setMessage] = useState('');

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Vehicles: ${vehicles}`,
      '',
      message,
    ].join('\n');

    const href = `mailto:info@tulipfleet.com?subject=${encodeURIComponent(copy.mailtoSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold tracking-tight text-offwhite sm:text-4xl">
        {copy.title}
      </h1>
      <p className="mt-4 font-medium leading-relaxed text-navy-fog">{copy.body}</p>

      <form onSubmit={onSubmit} className="glass mt-8 rounded-3xl p-6 sm:p-8">
        <div className="space-y-4">
          <Input label={copy.name} id="ea_name" value={name} onChange={setName} required />
          <Input
            label={copy.email}
            id="ea_email"
            type="email"
            value={email}
            onChange={setEmail}
            required
          />
          <Input
            label={copy.company}
            id="ea_company"
            value={company}
            onChange={setCompany}
            required
          />
          <Input
            label={copy.vehicles}
            id="ea_vehicles"
            value={vehicles}
            onChange={setVehicles}
          />
          <div>
            <label htmlFor="ea_message" className="mb-1.5 block text-sm font-medium">
              {copy.message}
            </label>
            <textarea
              id="ea_message"
              rows={4}
              className="w-full rounded-xl border border-navy-line bg-navy-ink/40 px-3.5 py-3 text-offwhite outline-none focus:border-accent/50"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn-primary mt-6 w-full">
          {copy.submit}
        </button>

        <p className="mt-4 text-center text-sm font-medium text-navy-fog">
          {copy.orEmail}
        </p>

        {/* TODO marker for future backend */}
        <p className="mt-3 text-[10px] font-medium text-navy-fog/60">{copy.todoBackend}</p>
      </form>

      <p className="mt-10 text-center text-sm font-medium text-navy-fog">
        {copy.trialCta}{' '}
        <a
          href={localizePath(locale, '/signup')}
          className="font-semibold text-accent-soft hover:text-accent"
        >
          {copy.trialLink}
        </a>
      </p>
    </div>
  );
}

function Input({
  label,
  id,
  value,
  onChange,
  type = 'text',
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-navy-line bg-navy-ink/40 px-3.5 py-3 text-offwhite outline-none focus:border-accent/50"
      />
    </div>
  );
}
