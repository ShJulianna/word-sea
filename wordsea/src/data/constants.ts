const level1 = {"words":["брат","араб","тара","бар","раб","бра"]}
const level2 = {"words":["минор","корм","кино","мир","ком","ион","ром","мор","рок","инок"]}
const level3 = {"words":["канон","икона","цинк","кино","ион","инок"]}

export const SORTED_LEVELS: Record<string, string[]> = {
    SORTED_LEVEL_1: level1.words.sort((a, b) => a.length - b.length),
    SORTED_LEVEL_2: level2.words.sort((a, b) => a.length - b.length),
    SORTED_LEVEL_3: level3.words.sort((a, b) => a.length - b.length),
}

