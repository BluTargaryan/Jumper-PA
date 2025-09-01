import { View } from "react-native"
import { HomeSearchCategoryHeader } from "./HomeSearchCategoryHeader"
import { HomeSearchCategoryItem } from "./HomeSearchCategoryItem"


export const HomeSearchCategory = ({
    title, items}: {title: string, items: any[]}) => {
    return (
        <View 
                style={{
                    width: '100%',
                    gap: 10,
                    flexDirection: 'column',
                }}>

                    <HomeSearchCategoryHeader
                    title={title}
                    />

                    {items.map((item, index) => (
                        <HomeSearchCategoryItem
                        key={index}
                        item={item}
                        type={title === 'Countries' ? 'country' : 'attraction'}
                        />
                    ))}
                </View>
    )
}