import React, { useEffect, useRef } from 'react'

const useInterval = (callback, delay) => {
  //Ref to save the provided callback - to ensure that callback stays in memory between state refreshes
  const savedCallback = useRef();

  //on mount/callback change - saved the passed callback to the current propert of the Ref
  useEffect(()=>{
    savedCallback.current = callback;
  }, [callback])

  //on mount/delay change - create a new interval where the callback for interval is the execution of callback saved in the ref
  //the clean up function will take care of clearing the running interval
  useEffect(()=>{
    function execCallback() {
      savedCallback.current();
    }

    //if we dont use exec callback and directly provide savedCallback.current to set interval
    //any state part of the passed callback function logic will not work as inside the setinterval state updates wont 
    //be available, so we need to wrap the callback inside another callback outside setinterval's scope 
    //and pass it
    if(delay !== null) {
      const intervalId = setInterval(execCallback, delay);
      return () => {
        console.log("clearing interval")
        clearInterval(intervalId)
      }
    }
  }, [delay])
}

export default useInterval