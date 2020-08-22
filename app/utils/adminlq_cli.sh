#!/bin/bash

readonly SOFTWARE_NAME="serverLQ CLI"
readonly SOFTWARE_ABBREVIATION="serverLQ"
readonly SOFTWARE_VERSION="v0.0.1"

readonly FONT_RED_COLOUR="\E[1;31m"
readonly FONT_GREEN_COLOUR="\E[1;32m"
readonly FONT_YELLOW_COLOUR="\E[1;33m"
readonly FONT_BLUE_COLOUR="\E[1;34m"
readonly FONT_PINK_COLOUR="\E[1;35m"
readonly FONT_RES="\E[0m"

basic_command() {
    case "$1" in
        help|h)
            echo "[Help]:"
            echo "  h) help   --display the help information"
            echo "  m) menu   --display the current module menu"
            echo "  c) clear  --clear the terminal screen"
            echo "  b) back   --back to home module"
            echo "  i) info   --info"
            echo "  q) quit   --exit script"
            ;;
        menu|m)
            echo "menu"
            ;;
        clear|c)
            clear
            ;;
        back|b)
            echo "back"
            ;;
        info|i)
            echo "info"
            ;;
        quit|q)
            exit;;
        *)
            "$1: command not found"
    esac
}

home_module() {
    clear

    echo -e "${FONT_BLUE_COLOUR}${SOFTWARE_NAME} ${SOFTWARE_VERSION}${FONT_RES}"
    echo -e "For details type 'help', use 'quit' to exit."

    current_module="home"
    while true
        do
            echo -en "${FONT_GREEN_COLOUR}[${SOFTWARE_ABBREVIATION}->${current_module}]# ${FONT_RES}"
            read command_content

            case "${command_content}" in
                test)
                    echo "test";;
                "")
                    true;;   
                *)
                    basic_command ${command_content}
            esac
        done
}

main() {
    home_module
}

main

test_module(){
    module_name=test

    while true
    do
        echo -en "${FONT_GREEN_COLOUR}[${software_name}->${module_name}]# ${FONT_RES}"
        read command_content

        case "${command_content}" in
        menu|m|1)
            echo "Menu:"
            echo "1) menu      --display the current module menu"
            echo "2) clear     --clear the terminal screen"
            echo "3) back      --back to home module"
            echo "4) quit      --exit script"
            echo "5) psql      --enter psql"
            ;;
        clear|2)
            clear;;
        back|b|3)
            module_name=home
            break;;
        quit|q|4)
            exit;;
        psql|5)
            /usr/bin/expect <<-EOF
			spawn sudo su - postgres
			expect {
				"password" { send "\r"; exp_continue }
				"postgres" { send "psql adminlq\r" }
			}
			expect "adminlq=#"
			send "\\\d\r"
			expect "adminlq=#"
			send "\\\q\r"
			expect "postgres"
			send "exit\r"
			expect eof
			EOF
            ;;
        "")
            true;;
        *)
           echo "${command_content}: command not found" 
        esac
    done
}

# home module
# clear

# echo -e "${FONT_BLUE_COLOUR}adminLQ CLI v0.0.1${FONT_RES}"
# echo -e "For details type 'menu', use 'quit' to exit."

# while true
# do
#     echo -en "${FONT_GREEN_COLOUR}[${software_name}->${module_name}]# ${FONT_RES}"
#     read command_content

#     case "${command_content}" in
#     menu|m|1)
#         echo "Menu:"
#         echo "1) menu      --display the current module menu"
#         echo "2) clear     --clear the terminal screen"
#         echo "3) back      --back to home module"
#         echo "4) quit      --exit script"
#         echo "5) test      --test script"
#         ;;
#     clear|2)
#         clear;;
#     back|b|3)
#         true;;
#     quit|q|4)
#         exit;;
#     test|5)
#         test_module;;
#     "")
#         true;;   
#     *)
#         echo "${command_content}: command not found"
#     esac
# done

