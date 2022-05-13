export type Difficulty = "easy" | "normal" | "hard";
export type SequenceType = "exercise" | "stretch" | "break";

export interface SequenceItem {
    slug: string,
    name: string,
    duration: number,
    type: SequenceType,
    reps?: number


}

export interface Workout {
    slug: string,
    name: string,
    duration: number,
    difficulty:  Difficulty,
    sequence: Array<SequenceItem>,

}