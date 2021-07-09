export {};
declare global {
    interface Math {
        /**
         * Get a random integer between `min` and `max`.
         *
         * @param min - min number
         * @param max - max number
         * @return number a random integer
         */
        randomRange(min: number, max: number): number;
    }
    interface String {
        contains(predicate: string): boolean;
    }
    interface Array<T> {
        leftJoin(inner: Array<T>, pk?: any, fk?: any): Array<T>;
        /**
         * Возвращает минимальное значение, содержащееся в последовательности значений.
         * @param predicate - function
         */
        minBy(predicate?: (value: T) => unknown): T;
        /**
         * Возвращает максимальное значение, содержащееся в последовательности значений.
         * @param predicate - function
         */
        maxBy(predicate?: (value: T) => unknown): T;
        /**
         * Сортирует элементы последовательности в порядке возрастания.
         * @param predicate - function
         */
        sortBy(predicate?: (value: T) => unknown): Array<T>;
        /**
         * Сортирует элементы последовательности в порядке возрастания.
         * @param predicate - function
         */
        sortSearch(predicate?: (value: T) => unknown, search?: any): Array<T>;
        /**
         * Возвращает различающиеся элементы последовательности.
         * @param selector - function
         */
        distinct(selector?: (x: T) => unknown): Array<T>;
        differenceWith(array: T[], predicate?: (left: T, right: T) => boolean): Array<T>;
        unionWith(array: T[], predicate?: (left: T, right: T) => boolean): Array<T>;
        /**
         * Группирует элементы последовательности.
         * @param predicate - function
         */
        groupBy(predicate?: (value: T) => unknown): {
            [key: string]: Array<T>;
        };
        /**
         * Группирует элементы последовательности.
         * @param predicate - function
         */
        groupBy(predicate?: (value: T) => unknown): {
            [key: number]: Array<T>;
        };
        /**
         * Проецирует каждый элемент последовательности в объект Array<T> и объединяет результирующие последовательности в одну последовательность.
         * @param predicate - function
         */
        selectMany(predicate?: (value: T) => unknown): Array<T>;
    }
    interface Date {
        addDays(days: number): Date;
        addHours(hours: number): Date;
    }
}
