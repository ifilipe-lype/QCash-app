import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

const sheet_id = uuid();

export default Object.freeze({
    sheet: {
        id: sheet_id,
        name: "03/2021",
        created_at: Date.now()
    },
    incomes: [
        {
            id: uuid(),
            sheet: sheet_id,
            description: "ganho #1",
            amount: "1250",
            done: true,
            done_at: "01/12/2021",
            created_at: "12/12/2020"
        },
        {
            id: uuid(),
            sheet: sheet_id,
            description: "ganho #2",
            amount: "3000",
            done: true,
            done_at: "01/12/2021",
            created_at: "12/12/2020"
        },
        {
            id: uuid(),
            sheet: sheet_id,
            description: "ganho #3",
            amount: "4000",
            done: false,
            done_at: "01/12/2021",
            created_at: "12/12/2020"
        },
        {
            id: uuid(),
            sheet: sheet_id,
            description: "ganho #4",
            amount: "1000",
            done: true,
            done_at: "01/12/2021",
            created_at: "12/12/2020"
        },
        {
            id: uuid(),
            sheet: sheet_id,
            description: "ganho #5",
            amount: "1000",
            done: false,
            done_at: "01/12/2021",
            created_at: "12/12/2020"
        },
    ],
    outcomes: [
        {
            id: uuid(),
            sheet: sheet_id,
            description: "despesa #1",
            amount: "1250",
            done: false,
            done_at: "01/12/2021",
            created_at: "12/12/2020"
        },
        {
            id: uuid(),
            sheet: sheet_id,
            description: "despesa #2",
            amount: "3000",
            done: true,
            done_at: "01/12/2021",
            created_at: "12/12/2020"
        },
        {
            id: uuid(),
            sheet: sheet_id,
            description: "despesa #3",
            amount: "4000",
            done: false,
            done_at: "01/12/2021",
            created_at: "12/12/2020"
        },
        {
            id: uuid(),
            sheet: sheet_id,
            description: "despesa #4",
            amount: "1000",
            done: true,
            done_at: "01/12/2021",
            created_at: "12/12/2020"
        },
        {
            id: uuid(),
            sheet: sheet_id,
            description: "despesa #5",
            amount: "1000",
            done: true,
            done_at: "01/12/2021",
            created_at: "12/12/2020"
        },
    ],
});
