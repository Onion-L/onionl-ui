const fitList = ['fill', 'contain', 'cover', 'none', 'scale-down'].map(fit => `ol-image__fit-${fit}`)

export const imageSafelist: string[] = [fitList].flat()
