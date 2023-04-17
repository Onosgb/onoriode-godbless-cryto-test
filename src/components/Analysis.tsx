
const  Analysis: React.FC<{errors: string, avg: string}> = ({errors, avg}) => {
  return (
    <div className="contents__analysis__pointer">
                        <div className="contents__analysis__pointer__container">
                            <div className="contents__analysis__pointer__container__circle">
                            </div>
                        </div>
                        <div className="contents__analysis____pointer__percentage">
                            <h1 className="contents__analysis____pointer__title">Errors: {errors}</h1>
                            <p className="contents__analysis____pointer__subtitle">Average: {avg}</p>
                        </div>
                    </div>
  )
}

export default Analysis