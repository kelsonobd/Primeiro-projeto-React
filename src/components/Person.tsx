//Sempre que criar um componente tem que retorar um elemento padrão
const getWeekDay = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date());
}

export const Person = () => {
    const data = {
     name: 'Lana Del Rey',
    avatar:'',
    roles: ['Cantora', 'Compositora']
    }

const today: Date = new Date();

    return (
        <div>
            <h1>Name: {data.name} - {getWeekDay(today)}</h1>
            <img
                src={data.avatar}
                alt={data.name}
                className="w-40 h-40"
            />
            <ul>
                <li>Singer</li>
                <li> 39 old years</li>
                <li>{data.roles[1]}</li>
                <li>{data.roles[0]}</li>
            </ul>
        </div>

    );
}