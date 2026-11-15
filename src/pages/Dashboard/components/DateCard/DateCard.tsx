import {
    DateDay,
    DateNumber,
    DateMonth,
    Container,
} from "../../Dashboard.styles";

interface DateCardProps {
    day: string;
    selected: boolean;
    month: any;
}

export function DateCard({ day, selected, month }: DateCardProps): any {
    return (
        <Container
            key={day}
            $selected={selected}
        >

            <DateDay>
                DOM
            </DateDay>

            <DateNumber>
                {day}
            </DateNumber>

            <DateMonth>
                {month.toLocaleString('es-PE', {
            month: 'short'
        }).replace('.', '').toUpperCase()}
            </DateMonth>

        </Container>
    )
}