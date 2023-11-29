export async function fetchStates() {
  return await (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_IBGE}/localidades/estados`)).json();
}

export async function fetchCitys(uf: string) {
  return await (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_IBGE}/localidades/estados/${uf}/municipios`)).json();
}
