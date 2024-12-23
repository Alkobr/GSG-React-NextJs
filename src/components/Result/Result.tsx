type ResultProps = {
    result: string;
  };
  
  function Result(props: ResultProps) {
    return <div className="result">{props.result}</div>;
  }
  
  export default Result;
  