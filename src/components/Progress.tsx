
const  Progress: React.FC<{percentage: number | string, className: string}> = ({percentage, className}) =>  {
  return (
        <div className={className} style={{width: percentage}}></div>
  )
}

export default Progress

