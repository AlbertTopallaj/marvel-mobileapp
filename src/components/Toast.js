export default function Toast({ message, type, visible }){
    if(!visible){
        return null;
    }

    let iconName;
    let iconColor;

    if(type === "success"){
        iconName = "checkmark-circle";
        iconColor = "4CAF50";
    } else if (type === "error"){
        iconName = "close-circle";
        iconColor = "#E53935";
    } else {
        iconName = "information-circle";
        iconColor = "#2196F3";
    }
}