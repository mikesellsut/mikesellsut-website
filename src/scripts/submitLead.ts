// Shared lead submit for the /tools/ forms.
// Netlify Forms: the <form data-netlify="true"> markup is in the static
// HTML of each tool page, so Netlify detects it at deploy. This posts the
// same fields URL-encoded with form-name. To switch to Formspree later,
// change only this function.
export async function submitLead(form: HTMLFormElement): Promise<boolean> {
  const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
  try {
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return true;
  } catch (err) {
    // Local dev / preview has no Netlify Forms endpoint. Still show the result.
    console.info("Lead not sent (Netlify Forms only works once deployed):", err);
    return false;
  }
}

export const money = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US");
