import { View } from "react-native"
import { HomeSearchCategoryHeader } from "./HomeSearchCategoryHeader"
import { HomeSearchCategoryItem } from "./HomeSearchCategoryItem"


export const HomeSearchCategory = () => {
    return (
        <View 
                style={{
                    width: '100%',
                    gap: 10,
                    flexDirection: 'column',
                }}>

                    <HomeSearchCategoryHeader
                    />

                    {Array.from({length: 3}).map((_, index) => (
                        <HomeSearchCategoryItem
                        key={index}
                        />
                    ))}
                </View>
    )
}