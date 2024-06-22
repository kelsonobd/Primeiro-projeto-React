//Sempre que criar um componente tem que retorar um elemento padrão
const getWeekDay = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date());
}

export const Person = () => {
    const name: string = 'Lana Del Rey';
    const avatar: string = '';
    const today: Date = new Date();

    return (
        <div>
            <h1>Name: {name} - {getWeekDay()}</h1>
            <img
                src={avatar}
                alt={name}
                className="w-40 h-40"
            />
            <ul>
                <li>Singer</li>
                <li> 39 old years</li>
                <li>Compositor</li>
                <li>Actriz</li>
            </ul>
        </div>

    );
}