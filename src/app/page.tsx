import { peopleList } from "../data/peopleList";


const Page = () => {

  const advogado = peopleList.filter(person => person.profession === 'advogado')

  return (
    <div>
      <h1 className="font-bold text 2-1">Hello world</h1>
      <h3>Algum texto qualquer</h3>

      {advogado.length > 0 &&
        <>
          <h3>Lista de Advogados:</h3>
          <ul>
            {advogado.map(person =>
              <li key={person.id}>{person.name}</li>
              )}
          </ul>
        </>

      }

    </div>
  );
}

export default Page;