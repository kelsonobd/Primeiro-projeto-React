import { peopleList } from "../data/peopleList";


const Page = () => {



  return (
    <div>
      <h1 className="font-bold text 2-1">Hello world</h1>
      <h3>Algum texto qualquer</h3>

      {peopleList.length > 0 &&
        <ul>
          {peopleList.map(
            person => <li key={person.id}>{person.name} - {person.profession}</li>
          )}
        </ul>
      }

    </div>
  );
}

export default Page;