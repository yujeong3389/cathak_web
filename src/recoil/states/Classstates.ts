import { atom } from 'recoil';
import { classInfoType } from '../types/classdetail';

//모든 수업 목록
export const classListState = atom<classInfoType[]>({
    key: 'classListState',
    default: [
        {
            className: '인간학1',
            classId: 1,
            credit: 2,
            category: '교양',
        },
        {
            className: '전자회로',
            classId: 2,
            credit: 3,
            category: '전공기초',
            major: '전자공학',
        },
        {
            className: '확률과 통계',
            classId: 3,
            credit: 3,
            category: '전공',
            major: '수학',
        },
        {
            className: '컴퓨터 구조',
            classId: 4,
            credit: 3,
            category: '전공기초',
            major: '컴퓨터공학',
        },
        {
            className: '시스템 소프트웨어 실습',
            classId: 5,
            credit: 3,
            category: '전공',
            major: '컴퓨터공학',
        },
        {
            className: '그리스도교',
            classId: 6,
            credit: 2,
            category: '교양',
        },
        {
            className: '과학의 논쟁',
            classId: 7,
            credit: 3,
            category: '교양',
        },
        {
            className: '요가',
            classId: 8,
            credit: 3,
            category: '교양',
        }
    ],
});


