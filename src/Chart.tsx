import { FC, useEffect, useRef } from 'react'
import ChartJS from 'chart.js/auto'
import { ChartType, ChartData, ChartOptions } from 'chart.js'

type ChartProps = {
  type: ChartType
  data: ChartData
  options?: ChartOptions
}

export const Chart: FC<ChartProps> = ({ type, data, options }) => {
  const canvas = useRef<any>()

  useEffect(() => {
    const chart = new ChartJS(canvas.current.getContext('2d'), { type, data, options })

    return () => chart.destroy()
  }, [type, data, options])

  return <canvas ref={canvas} />
}
