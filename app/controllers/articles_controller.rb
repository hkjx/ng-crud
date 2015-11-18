class ArticlesController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :update, :show]
  before_filter :set_article, except: [:index, :create]
  
  def index
    render json: Article.all.as_json
  end

  def show
    render json: @article.as_json
  end

  def update
    @article.update(article_params)
    render json: @article.as_json, status: :ok
  end

  def create
    @article = Article.create(article_params)
    render json: @article.as_json, status: :ok
  end

  def destroy
    @article.destroy
    render json: {status: :ok}
  end

private

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title, :body, :author)
  end

end