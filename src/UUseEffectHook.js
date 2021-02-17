import React, {useEffect, useState} from 'react'

export default function useEffectHook() {

    const [learn, setLearn] = useState(0)
    const [learnMore, setLearnMore] = useState(100)

    useEffect(() => {
        console.log('onMount')

        return () => {
            console.log('unmount')
        }
    }, [])

    useEffect(() => {
        console.log('onMount and on click Learn')
    }, [learn])

    

    return (
        <div>
            <h3>Click to console.log(onMount and on click Learn)</h3>
            <button onClick={() => setLearn(learn + 1)}>Learn {learn}</button>
        </div>
    )
}
