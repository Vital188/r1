function Row({t}) {

    return (
            <li>{t.id} {t.title} <i>{t.height} meters</i></li>
    );

}

export default Row;