export function formatDateAndGetDayOfTheWeek(date: string): string {
  return new Date(date).toLocaleString('pt-BR', { timeZone: 'UTC', weekday: 'long' }).substring(0, 3);
};

export function formatDateForCard(date: string): string {
  const formatter = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC', day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit' });
  return formatter.format(new Date(date));
};

export function compareDateWithCurrent(date: string): boolean {
  return new Date(date) > new Date(Date.now());
};



