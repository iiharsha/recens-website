import { SortFilterItem } from '@/lib/constants';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

function FilterItemList({ list }: { list: ListItem[] }) {
    return (
        <>
            {list.map((item: ListItem, i) => (
                <FilterItem key={i} item={item} />
            ))}
        </>
    );
}

export default function FilterList({ list, title }: { list: ListItem[]; title?: string }) {
    return (
        <>
            <nav className="flex items-center justify-center gap-x-8">
                {title ? (
                    <h3 className="hidden text-[16px] mb-2 text-dark md:block">{title}</h3>
                ) : null}
                <ul className="hidden items-center justify-center gap-4 md:flex mb-2">
                    <FilterItemList list={list} />
                </ul>
                <ul className="md:hidden">
                    <FilterItemDropdown list={list} />
                </ul>
            </nav>
        </>
    );
}
