const imageFit = ['fill', 'contain', 'cover', 'none', 'scale-down'].map(fit => `ol-image__fit-${fit}`)

export const imageSafelist: string[] = ['ol-image', ...imageFit]
