import ProjetoForm from "../../../ProjetoForm";

export default async function NovoProjeto({ searchParams }) {
  const { lado } = await searchParams;
  return (
    <>
      <div className="admin-head">
        <div>
          <span className="mono" style={{ opacity: 0.6 }}>Portfólio</span>
          <h1>Novo projeto</h1>
        </div>
      </div>
      <ProjetoForm ladoInicial={lado === "rec" ? "rec" : "dev"} />
    </>
  );
}
