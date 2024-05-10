import { log } from "console"

async function getData(){
  const res = await fetch('http://localhost:3000/api')
  if (!res.ok) {
    throw new Error("Can't fetch data from URL")
  }
  return res.json()
}
export default async function Content() {
    const products = await getData()
    return (
      <div> {
        products.data.products.map((p:any,i:number)=> (<div key={i}>
          {p.title}
        </div>))
        } </div>
    )
  }
  