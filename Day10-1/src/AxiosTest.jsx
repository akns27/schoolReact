function AxiosTest(){
  return (
    <button onClick={()=>{
      axios.get('https://mikki32sw.github.io/airanb/data.json').then((result)=>{ 
        console.log(result.data)
      })
      .catch(()=>{
        console.log('실패함')
      })
    }}>버튼</button>
  )
}



export default AxiosTest;