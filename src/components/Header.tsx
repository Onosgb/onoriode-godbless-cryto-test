const  Header: React.FC<{title: string}> = ({title}) => {
  return (
    <div className="header"><h1 className="header__title">{title}</h1></div>
  )
}

export default Header