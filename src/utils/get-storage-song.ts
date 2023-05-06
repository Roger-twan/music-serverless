export default async (id: number, env: Env) => {
  const data: D1Result = await env.DB.prepare(
    `
      SELECT *
      FROM songs
      WHERE origin_id = ?1 OR id = ?1
    `
  )
  .bind(id)
  .first()

  return data;
}
