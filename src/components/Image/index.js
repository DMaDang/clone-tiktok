import { useState, forwardRef} from 'react'
import images from '~/assets/images'
import styles from './Image.module.scss'

const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, className, ...props}, ref) => {
    const [fallback, setFallback ] = useState('')
    const handleError = () => {
        setFallback(images.noImage)
    }
    return <img className={(styles.wrapper, className)} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError}/>;
})

export default Image;