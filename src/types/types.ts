export interface TodoListProps {
    id: number
    name: string
    email: string
    issue: string
    isComplete: boolean
    removeFromDoneList: (id: number) => void
};


export interface InputState {
    id: number
    name: string
    email: string
    issue: string
    isComplete: boolean
}