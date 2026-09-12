export interface DailyPost {
    author?: string;
    content?: string;
    date?: string;
    id?: string;
    source?: string;
    title?: string;
    url?: string;
}
export interface DailyPostListMatch {
    author?: string;
    content?: string;
    date?: string;
    id?: string;
    source?: string;
    title?: string;
    url?: string;
    $action?: string;
    [action: string]: any;
}
