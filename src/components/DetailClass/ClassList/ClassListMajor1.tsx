import React from 'react';
import * as S from './Styles';
import ClassContainer from '../ClassContainer/ClassContainer';
import { useRecoilValue } from 'recoil';
import { attendedClassListState } from '../../../recoil/selectors/attendedClass';
import DividingLine from '../../DividingLine/DividingLine';
import EssentailBox from '../EssentailBox/EssentailBox';
import Credit from '../Credit/Credit';
import ClassTypeMajor1List from '../ClassTypeList/ClassTypeMajorSecondList';

const ClassListMajor1: React.FC = () => {
    const attendedClasses = useRecoilValue(attendedClassListState);

    return(
        <S.Layout>
            <S.ClassContainer>
                <ClassTypeMajor1List />
                <Credit />
                <EssentailBox 
                   description=" 외국어 강의 교과목을 중핵교양 필수, 글로벌영어영역 교과목, 전공 교과목
18학점을 수강해야함"
                />
                <DividingLine />
                <S.ClassBox>
                    <ClassContainer data={attendedClasses} />
                </S.ClassBox>
            </S.ClassContainer>
        </S.Layout>
    )
}

export default ClassListMajor1;