
export type GradientType = {
    background: string
}

export const firstGradient: GradientType = {
    background:
        `linear-gradient(to 
            right, 
            ${'#012456'}, 
            ${'#233763'}, 
            ${'#8e445a'}
            )`,
}

export const secondGradient: GradientType = {
    background:
        `linear-gradient(to 
            right, 
            ${'#3b5601'}, 
            ${'#3861cd'}, 
            ${'#e75c07'}
            )`,
}