import { useState, type FormEvent } from 'react';

interface Copy {
  formTitle: string;
  formBody: string;
  name: string;
  email: string;
  company: string;
  scenario: string;
  submit: string;
  orEmail: string;
  mailtoSubject: string;
  todoBackend: string;
}

interface Props {
  copy: Copy;
}

/**
 * Connect waitlist — mailto draft only (same pattern as early-access).
 * TODO: Replace with POST endpoint when Connect waitlist API is ready.
 */
export default function ConnectForm({ copy }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [scenario, setScenario] = useState('');

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      '',
      'Use case:',
      scenario,
    ].join('\n');
    window.location.href = `mailto:info@tulipfleet.com?subject=${encodeURIComponent(copy.mailtoSubject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="glass mt-8 rounded-3xl p-6 sm:p-8">
      <h2 className="font-display text-xl font-bold text-offwhite sm:text-2xl">{copy.formTitle}</h2>
      <p className="mt-2 text-sm font-medium text-navy-fog">{copy.formBody}</p>

      <div className="mt-6 space-y-4">
        <Field label={copy.name} id="c_name" value={name} onChange={setName} required />
        <Field label={copy.email} id="c_email" type="email" value={email} onChange={setEmail} required />
        <Field label={copy.company} id="c_company" value={company} onChange={setCompany} required />
        <div>
          <label htmlFor="c_scenario" className="mb-1.5 block text-sm font-medium">
            {copy.scenario}
          </label>
          <textarea
            id="c_scenario"
            rows={4}
            required
            value={scenario}
            onChange={(e) => setScenario(e.target.value)}
            className="w-full rounded-xl border border-navy-line bg-navy-ink/40 px-3.5 py-3 text-offwhite outline-none focus:border-accent/50"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full">
        {copy.submit}
      </button>
      <p className="mt-4 text-center text-sm font-medium text-navy-fog">{copy.orEmail}</p>
      <p className="mt-3 text-[10px] font-medium text-navy-fog/60">{copy.todoBackend}</p>
    </form>
  );
}

function Field({
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
