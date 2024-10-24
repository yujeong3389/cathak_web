import React, { useState } from 'react';
import * as S from './Styles';
import { NotsaveClass, SaveClass } from '../../../assets/icon';
import { classInfoType } from '../../../recoil/types/classdetail';
import { userInfoType } from '../../../recoil/types/userdetail';

//추후 사용자가 저장, 삭제했을 때 서버에 요청 보내기 구현해야함
interface Props {
    data: classInfoType[];
    user:userInfoType;
}
const ClassContainer = ({ data,user }: Props) => {
    const [savedClasses, setSavedClasses] = useState<number[]>(user.attendedClasses);

    const handleToggleSave = (classId: number) => {
        setSavedClasses(prev =>
            prev.includes(classId)
                ? prev.filter(id => id !== classId)
                : [...prev, classId]
        );
    };

    return (
        <S.Layout>
            {data.map((d) => (
                <S.Container key={d.classId}>
                    <S.ClassName>{d.className}</S.ClassName>
                    <S.Credit>{d.credit}학점</S.Credit>
                    <S.IconWrapper onClick={() => handleToggleSave(d.classId)}>
                        {savedClasses.includes(d.classId) ? (
                            <SaveClass style={{cursor:'pointer'}}/>
                        ) : (
                            <NotsaveClass />
                        )}
                    </S.IconWrapper>
                </S.Container>
            ))}
        </S.Layout>
    );
};

export default ClassContainer;
