# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  # ---2)
  def index
    @posts = BlogPost.all
  end

  # ---3)
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      redirect_to blog_posts_path
    end
  end

  # ---9)
  private
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end

# 1) This is the declaration of a class BolgPostController that is a child of ApplicationController and that is signofied by the less than symbol. BlogPostController would inhert all properties and method from Application Controller. Blog controller is going to be used to handle HTTP requests from the user reagarding the blog posts. 

# 2) The index method is pulling a list of all the posts from the model BlogPost and they are assigned to am instance variable @posts. index is associated wth the HTTP verb GET. From a users prespective they would be requesting to see all the post that the blog and blogpost controller would use the index method to retrive that information. 

# 3) The show method is associated with the GET HTTP verb. This would be for when a user requests information for a particular post and it is found by the id that is passed to params as an argument and stored in the intance variable of @post. 

# 4) The new method is associated with the GET HTTP verb. It's action is to gather input from the user it is a form so the user would see some kind of input field on the view where they could interact and input data. 

# 5) The create method is a method associated with the HTTP verb POST. This is adding new data or a post in this case to the Modle but only if it meets the blog_post_params which require to include a :title and :content if it meets that criteria then the post is generated and then redirected to blog_post_path(@post) which would display the newly generated post. 

# 6) The edit method is associated with the HTTP verb GET. In this case the user would be requesting to edit a post and edit find the specific post by the id. This is a form so this will display some type of field to the user to add,remove, and possibly change existing data.

# 7) The update method is associated with PUT and PATCH HTTP verbs. This is updating the data that was edited by passing (blog_post_params) it checks that it meets the requirments for the data to be considered valid. If it does then it is redirected to the updated post. Typically if it does not there will be some kind of error message for the user on what it is missing. 

# 8) The destroy method is typically associated with the HTTP verb DELETE. This is utulized when the user wants to delete a particular post that is found my the id. Once the post is deleted the user gets redirected to the page where all the remaining posts are. 

# 9) This is a method that is used to filter our posts so that there is no bad data going into the model it states that a :title is required as well as :content. The private indication is so that this method can not be called on from outside by the user and can only be called by the method in the class. 