export async function getExpenses(token) {
  const response = await fetch(
    "https://jwt-auth-eight-neon.vercel.app/expenses",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}
