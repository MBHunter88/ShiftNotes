export function formatLocalTime(isoString: string) {
  const date = new Date(isoString);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
}
