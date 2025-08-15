import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSequence,
    withTiming
} from "react-native-reanimated";
import { colors } from "../styleUtils/styleValues";

interface FavoriteButtonProps {
  initialState?: boolean;
  onToggle?: (newState: boolean) => void;
}

export default function FavoriteButton({ initialState = false, onToggle }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(initialState);
  const favoriteScale = useSharedValue(1);

  const favoriteAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: favoriteScale.value }],
      position: 'absolute',
      right: 0,
    };
  });

  const handleFavoritePress = () => {
    favoriteScale.value = withSequence(
      withTiming(0, { duration: 150 }),
      withTiming(1, { duration: 150 })
    );
    const newState = !isFavorite;
    setIsFavorite(newState);
    onToggle?.(newState);
  };

  return (
    <TouchableOpacity
      onPress={handleFavoritePress}
      style={{ width: 24, height: 24 }}
    >
      <Animated.View style={favoriteAnimatedStyle}>
        {isFavorite ? (
          <MaterialIcons name="favorite" size={24} color={colors.red} />
        ) : (
          <MaterialIcons name="favorite-outline" size={24} color={colors.background} />
        )}
      </Animated.View>
    </TouchableOpacity>
  );
}
