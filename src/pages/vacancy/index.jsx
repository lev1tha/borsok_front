import React from "react";
import style from "./vacancyPage.module.css";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className={style.vacancy_container_page}>
      <div className={style.vacancy_infocommunicate}>
        <div className={style.title_vacancy}>
          <h1>Вакансии</h1>
        </div>
        <div className={style.box_information}>
          <div className={style.left_information}>
            <div className={style.title_left_site}>
              <p>
                Кофе-рестораны Borsok приглашают к сотрудничеству как опытных
                специалистов, так и тех, кто только начинает свою карьеру в
                сфере гостеприимства. Мы ищем людей, готовых работать с полной
                самоотдачей, с внутренней мотивацией и желанием достигать новых
                высот. Если вы хотите учиться и развиваться, работать в команде
                и вносить свой вклад в создание уникальной атмосферы для наших
                гостей — добро пожаловать в команду Borsok!
              </p>
            </div>
            <div className={style.suptitle_left_site}>
              <div className={style.suptitle}>
                <h4>Наше преимущества для вас:</h4>

                <ul>
                  <li>Корпаратив</li>
                  <li>Корпаратив</li>
                  <li>Корпаратив</li>
                  <li>Корпаратив</li>
                  <li>Корпаратив</li>
                  <li>Корпаратив</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.right_information}>
            <div className={style.title_right_site}>
              <h1>Куда вы можете обратиться для подачи заявки</h1>
              <p>
                Вы можете оставить свою заявку по ниже указанным контактам, или
                соц.сетям
              </p>
            </div>
            <div className={style.navigate_links}>
              <Link>
                <span>instagram</span>
              </Link>
              <Link>
                <span>telegram</span>
              </Link>
              <Link>
                <span>whats`app</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
