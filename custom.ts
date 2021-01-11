
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */

//% weight=100 color=#0fbc11 icon="\uf0b2"

namespace XCOM {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function fd4(n: number, s: string, e: MyEnum): void {
        // Add code here
    }
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function fd3(n: number, s: string, e: MyEnum): void {
        // Add code here
    }



    /**
     * ฟังก์ชัน หมุนตัวทางขวา
     */
    //% block="SR speed %speed|time %time"
    //% speed.min=0 speed.max=255
    export function sr(speed: number,time: number): void {
            robotbit.MotorRun(robotbit.Motors.M1A, -speed)
            robotbit.MotorRun(robotbit.Motors.M2B, speed)
            basic.pause(time)
    }

    /**
     * ฟังก์ชัน หมุนตัวทางซ้าย
     */
    //% block="SL speed %speed|time %time"
    //% speed.min=0 speed.max=255
    export function sl(speed: number,time: number): void {
            robotbit.MotorRun(robotbit.Motors.M1A, speed)
            robotbit.MotorRun(robotbit.Motors.M2B, -speed)
            basic.pause(time)
    }



    /**
     * ฟังก์ชัน เดินหน้า กำหนดความเร็ว กับเวลา
     */
    //% block="FD1 speed %speed|time %time"
    //% speed.min=-255 speed.max=255
    export function fd1(speed: number,time: number): void {
            robotbit.MotorRun(robotbit.Motors.M1A, speed)
            robotbit.MotorRun(robotbit.Motors.M2B, speed)
            basic.pause(time)
    }

    /**
     * ฟังก์ชัน ถอยหลัง
     */
    //% block="BK speed %speed|time %time"
    //% speed.min=0 speed.max=255
    export function bk(speed: number,time: number): void {
            robotbit.MotorRun(robotbit.Motors.M1A, -speed)
            robotbit.MotorRun(robotbit.Motors.M2B, -speed)
            basic.pause(time)
    }




    /**
     * ฟังก์ชัน เดินหน้า กำหนดความเร็วซ้าย และขวา
     */
    //% block="FD2 speedL %speedL|speedR %speedR"
    //% speedL.min=-255 speedL.max=255
    //% speedR.min=-255 speedR.max=255    
    export function fd2(speedL: number,speedR: number): void {
            robotbit.MotorRun(robotbit.Motors.M1A, speedR)
            robotbit.MotorRun(robotbit.Motors.M2B, speedL)
    }


    /**
     * ฟังก์ชัน เดินหน้า กำหนดความเร็วซ้าย และขวา กับเวลา
     */
    //% block="FD22 speedL %speedL|speedR %speedR|time %time"
    //% speedL.min=-255 speedL.max=255
    //% speedR.min=-255 speedR.max=255    
    export function fd22(speedL: number,speedR: number,time: number): void {
            robotbit.MotorRun(robotbit.Motors.M1A, speedR)
            robotbit.MotorRun(robotbit.Motors.M2B, speedL)
            basic.pause(time)
    }

}
