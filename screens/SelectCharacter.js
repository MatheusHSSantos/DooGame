import {
    StyledContainer,
    InnerContainer,
    ListTitleView,
    ListLogo,
    ListSquare,
    ListContainer,
    PageTitle
} from '../components/styles';

const SelectCharacter = () => {

    return (
        <StyledContainer>
            <InnerContainer>
                <ListTitleView>
                    <PageTitle list={true}>Selecione o seu personagem</PageTitle>
                </ListTitleView>
            </InnerContainer>
        </StyledContainer>
    );
}

export default SelectCharacter;