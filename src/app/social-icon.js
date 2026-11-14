export default function SocialIcon({ name }) {
  return (
    <svg className={`social-icon social-icon-${name}`} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {name === 'whatsapp' && <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.5-4.7A9 9 0 1 1 21 11.5Z" /><path d="m8.1 7.2 1.4 2.6-1.1 1.1a9.1 9.1 0 0 0 4.5 4.1l1-1.3 2.7 1.3c.1 1.4-.9 2.1-2.1 2-4.5-.5-8.4-4.3-8.7-7.8 0-1.1.9-2 2.3-2Z" fill="currentColor" stroke="none" /></g>}
      {name === 'facebook' && <path fill="currentColor" d="M24 12a12 12 0 1 0-13.875 11.855v-8.386H7.078V12h3.047V9.356c0-3.008 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.386A12.003 12.003 0 0 0 24 12Z" />}
      {name === 'instagram' && <g fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></g>}
      {name === 'tiktok' && <path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.49 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.05.86.13V9a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 1 0 6.33 6.34V8.32a8.16 8.16 0 0 0 4.77 1.52V6.39c-.34 0-.67-.04-1-.1v.4Z" />}
    </svg>
  );
}
