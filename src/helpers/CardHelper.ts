export enum EnumProblemStatus {
    new = "Новая",
    solved = "Решена",
    closed = "Закрыта",
}

export const ProblemStatus: Record<EnumProblemStatus, string> = {
    [EnumProblemStatus.new]: "new",
    [EnumProblemStatus.solved]: "solved",
    [EnumProblemStatus.closed]: "closed",
}