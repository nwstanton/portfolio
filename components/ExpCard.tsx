
function ExpCard({
  name,
  position,
  experience,

}:{
name : string
position : string
experience : string[] 
}) {

  return (
    <div className="max-w-{300} rounded border border-slate-500 from-green-300 to-blue-400 p-4 hover:border-white hover:bg-gradient-to-r hover:shadow-lg">
      <h2 className="text-lg font-bold text-black">{name} &rarr;</h2>
      <h3>{position}</h3>
      <ul className="list-disc list-outside mx-6 mb-4">
        {experience.map((value: string, index: number) => (
              <li key={index}>{value}</li>
            ))}
      </ul>
    </div>
  )
}

export default ExpCard
