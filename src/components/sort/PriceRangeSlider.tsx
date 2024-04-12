import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useState, useEffect } from 'react'

interface PriceRangeSliderProps {
  minPrice: number
  maxPrice: number
  value: number[]
  onMinPriceChange: React.Dispatch<React.SetStateAction<string>>
  onMaxPriceChange: React.Dispatch<React.SetStateAction<string>>
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  minPrice,
  maxPrice,
  value,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  const [values, setValues] = useState<number[]>(value)

  const handleSliderChange = (newValues: number | number[]) => {
    if (Array.isArray(newValues)) {
      setValues(newValues)
      onMinPriceChange(String(newValues[0]))
      onMaxPriceChange(String(newValues[1]))
    }
  }

  return (
    <div>
      <Slider
        min={minPrice}
        max={maxPrice}
        value={value}
        onChange={handleSliderChange}
        range
        trackStyle={[{ height: '8px', top: '3px', backgroundColor: '#545454' }]}
        handleStyle={[
          {
            width: '14px',
            height: '14px',
            border: '1px solid #545454',
            borderRadius: '0',
            backgroundColor: 'white',
            opacity: '1',
          },
          {
            width: '14px',
            height: '14px',
            marginTop: '-5px',
            border: '1px solid #545454',
            borderRadius: '50%',
            backgroundColor: 'white',
            opacity: '1',
          },
        ]}
        railStyle={{ height: '8px', top: '3px', backgroundColor: '#aba9a9' }}
      />
    </div>
  )
}
export default PriceRangeSlider
