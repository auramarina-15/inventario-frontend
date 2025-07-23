
const urlBase = "http://localhost:8000/Usuario/"

export const Data = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(urlBase);
  if (!res.ok) throw new Error("Error en la petición");
  const data = await res.json();
  return data;
};

export const postData = async (dataToSend) => {
  const res = await fetch(supabase.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabase.apikey,
      Authorization: supabase.authorization,
    },
    body: JSON.stringify(dataToSend),
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Error en la petición POST");
  }
  // Manejar respuesta vacía
  const contentLength = res.headers.get("Content-Length");
  if (contentLength === "0" || !contentLength) {
    return { success: true }; // Retornar objeto vacío si no hay contenido
  }
  return await res.json();
};



export const DataId = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 2 segundos de delay
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) throw new Error("Error en la petición");
  return res.json();
};
