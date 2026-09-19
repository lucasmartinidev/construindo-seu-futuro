import DefaultLayout from "interface/DefaultLayout";

function Home() {
  return (
    <DefaultLayout
      metadata={{
        description:
          "Construindo Seu Futuro | Buscando conectar instrutores a alunos que tem interesse em ter aulas de direção.",
      }}
    >
      <h1>
        🚙 Construindo Seu Futuro 🛵
      </h1>
      <h3>
        🚌 Buscando conectar instrutores a alunos que tem interesse em ter aulas de direção! 🚚
      </h3>
    </DefaultLayout>
  );
}

export default Home;
